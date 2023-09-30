import ErrorEntity from '@/domain/entities/error-entity'
import ValidateSubscriptionDate from '@/domain/usecases/validate-subscription-date'
import moment from 'moment'

export default class ValidateSubscriptionDateAdapter implements ValidateSubscriptionDate {
  validate(endDate: Date): Date {
    const now = new Date()
    const validData = moment(endDate) > moment(now)

    if (!validData) throw new ErrorEntity('Invalid subscription date', 400)

    return now
  }
}