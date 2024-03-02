import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsUsecaseRequest {
  userId: string
}

interface GetUserMetricsUsecaseResponse {
  checkInsCount: number
}

export class GetUserMetricsUsecase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUsecaseRequest): Promise<GetUserMetricsUsecaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
