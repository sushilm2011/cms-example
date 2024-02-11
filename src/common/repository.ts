import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export class GenericRepository<T> {
  private readonly dbPath: string;

  constructor(private readonly filename: string) {
    this.dbPath = path.resolve(__dirname, `${this.filename}.json`);
  }

  private readDb(): T[] {
    try {
      return JSON.parse(fs.readFileSync(this.dbPath, 'utf8'));
    } catch (error) {
      return [];
    }
  }

  private writeDb(data: T[]): void {
    fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2), 'utf8');
  }

  public create(entity: Omit<T, 'id'>): T {
    const entities = this.readDb();
    const newEntity = { id: uuidv4(), ...entity } as T;
    entities.push(newEntity);
    this.writeDb(entities);
    return newEntity;
  }

  public findAll(): T[] {
    return this.readDb();
  }

  public findOne(predicate: (entity: T) => boolean): T | undefined {
    const entities = this.readDb();
    return entities.find(predicate);
  }

  public update(id: string, updateEntity: Partial<T>): T | null {
    const entities = this.readDb();
    const entityIndex = entities.findIndex((entity: any) => entity.id === id);
    if (entityIndex === -1) return null;
    const updatedEntity = { ...entities[entityIndex], ...updateEntity } as T;
    entities[entityIndex] = updatedEntity;
    this.writeDb(entities);
    return updatedEntity;
  }

  public remove(id: string): T | null {
    let entities = this.readDb();
    const lengthBefore = entities.length;
    entities = entities.filter((entity: any) => entity.id !== id);
    if (entities.length < lengthBefore) {
      this.writeDb(entities);
      return { id } as T;
    } else {
      return null;
    }
  }
}
