import {Source} from './source.entity';

export class Article {

  title: string;
  description: string;
  author: string;
  url: string;
  urlToImage: string;
  publisedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.author = '';
    this.url = '';
    this.urlToImage = '';
    this.publisedAt = '';
    this.source = new Source();
  }
}
