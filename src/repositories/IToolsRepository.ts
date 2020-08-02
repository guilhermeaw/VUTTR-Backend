import Tool from '../entities/Tool';

export default interface IToolsRepository {
  findByName(name: string): Promise<Tool>;
  findByTag(tag: string): Promise<Tool>;
}
