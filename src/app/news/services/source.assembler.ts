import {LogoApiService} from '../../shared/services/logo-api.service';
import {SourceResource, SourcesResponse} from './sources.responses';
import {Source} from '../model/source.entity';

export class SourceAssembler {

  static logoApiService: LogoApiService;
  static withLogoApiService(logoApiService: LogoApiService) {
   this.logoApiService = logoApiService;
   return this;
  }

  static toEntityFromResource(resource: SourceResource): Source {
    return {
      id: resource.id,
      name: resource.name,
      url: resource.url || '',
      urlToLogo: this.logoApiService.geturlToLogo(resource)
    };
  }

  static toEntitiesFromResponse(response: SourcesResponse): Source[] {
    return response.sources.map(source => this.toEntityFromResource(source));
  }
}
