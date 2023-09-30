export default interface ValidateSubscriptionDate {
  validate(endDate: Date): Promise<boolean>
}