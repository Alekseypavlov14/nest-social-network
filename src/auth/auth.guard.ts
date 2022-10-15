import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { TokensService } from './../tokens/tokens.service'
import { Observable } from 'rxjs'
import { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private TokensService: TokensService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization
    const accessToken = authorizationHeader.split(' ')[1]

    try {this.TokensService.verifyAccessToken(accessToken)}
    catch(e) {return false}

    return true
  }
}
