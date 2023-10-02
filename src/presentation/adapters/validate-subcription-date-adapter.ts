import ErrorEntity from '@/domain/entities/error-entity'
import ValidateSubscriptionDate from '@/domain/usecases/validate-subscription-date'
import moment from 'moment'

export default class ValidateSubscriptionDateAdapter implements ValidateSubscriptionDate {
  validate(endDate: Date, startDate: Date): Date {
    const now = new Date()
    const validEndDate = moment(endDate) > moment(now)
    const validStartDate = moment(startDate) < moment(now)

    if (!validEndDate || !validStartDate) throw new ErrorEntity('Invalid subscription date', 400)

    return now
  }
}