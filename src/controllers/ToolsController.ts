import { Request, Response } from 'express';
import ListToolsService from '../services/ListToolsService';

export default class ToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { tag, title } = request.query;

    const listTools = new ListToolsService();

    const tools = listTools.execute({
      tag: String(tag),
      title: String(title),
    });

    return response.json(tools);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}
