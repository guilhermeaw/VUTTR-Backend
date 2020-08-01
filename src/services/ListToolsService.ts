interface IRequest {
  tag: string;
  title: string;
}

class ListToolsService {
  public async execute({ tag, title }: IRequest): Promise<void> {}
}

export default ListToolsService;
