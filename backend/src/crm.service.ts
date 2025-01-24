import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CrmService {
  private accessToken: string;
  private baseDomain: string;

  constructor(private readonly httpService: HttpService) {}

  async fetchAccessToken(): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(
          'https://app2.gnzs.ru/amocrm/test/oauth/get-token.php',
          { headers: { 'X-Client-Id': 32185358 } },
        ),
      );
      const { access_token, base_domain } = response.data;
      if (!access_token || !base_domain) {
        throw new Error('Некорректный ответ от сервера');
      }
      this.accessToken = access_token;
      this.baseDomain = base_domain;
    } catch (error) {
      throw new HttpException(
        `Ошибка при получении токена: ${error.message}`,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async addItems(endpoint: string): Promise<string> {
    if (!this.accessToken || !this.baseDomain) {
      throw new Error('Access token и base domain не установлены.');
    }
    try {
      const response = await lastValueFrom(
        this.httpService.post(
          `https://${this.baseDomain}/api/v4/${endpoint}`,
          [{}],
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.accessToken}`,
            },
          },
        ),
      );

      return response.data._embedded[endpoint][0].id;
    } catch (error) {
      throw new HttpException(
        `Ошибка при создании записей: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
