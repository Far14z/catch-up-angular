import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LogoApiService} from '../../shared/services/logo-api.service';
import {map, Observable} from 'rxjs';
import {Source} from '../model/source.entity';
import {SourcesResponse} from './sources.responses';
import {SourceAssembler} from './source.assembler';
import {Article} from '../model/article.entity';
import {TopHeadlinesResponse} from './top-headlines.response';
import {ArticleAssembler} from './article.assembler';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private baseUrl = environment.newsProviderApiBaseUrl;
  private newsEndpont = environment.newsProviderNewsEndpointPath;
  private sourcesEndpoint = environment.newsProviderSourcesEndPoitnPath;
  private apiKey = environment.newsProviderApiKey;

  constructor(private http: HttpClient, private logoApiService: LogoApiService ) { }

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`,
      { params : {apiKey: this.apiKey}}).pipe(
        map(response => SourceAssembler.withLogoApiService(this.logoApiService)
          .toEntitiesFromResponse(response)));
  }

  getArticlesBySourceId(sourceId: string): Observable<Article[]> {
    return this.http.get<TopHeadlinesResponse>(`${this.baseUrl}${this.newsEndpont}`,
      {params: {apiKey: this.apiKey, sources: sourceId}})
      .pipe(map(response => ArticleAssembler.withLogoApiService(this.logoApiService)
        .toEntitiesFromResponse(response)));
  }
}
