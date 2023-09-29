import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import connection from '@/infra/database/connection'

jest.mock('@/infra/database/connection', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = connection as unknown as DeepMockProxy<PrismaClient>