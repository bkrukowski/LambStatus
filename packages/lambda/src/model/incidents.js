import { incidentStatuses } from 'utils/const'
import { isValidDate } from 'utils/datetime'
import { ValidationError } from 'utils/errors'

export class Incident {
  constructor ({incidentID, name, status, createdAt = new Date().toISOString(), updatedAt = new Date().toISOString()}) {
    this.incidentID = incidentID
    this.name = name
    this.status = status
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  validate () {
    if (this.incidentID === undefined || this.incidentID === '') {
      throw new ValidationError('invalid incidentID parameter')
    }
    this.validateExceptID()
  }

  validateExceptID () {
    if (this.name === undefined || this.name === '') {
      throw new ValidationError('invalid name parameter')
    }

    if (incidentStatuses.indexOf(this.status) < 0) {
      throw new ValidationError('invalid incident status parameter')
    }

    if (!isValidDate(this.createdAt)) {
      throw new ValidationError('invalid createdAt parameter')
    }

    if (!isValidDate(this.updatedAt)) {
      throw new ValidationError('invalid updatedAt parameter')
    }
  }

  setIncidentID (incidentID) {
    this.incidentID = incidentID
  }

  objectify () {
    const { incidentID, name, status, createdAt, updatedAt } = this
    return { incidentID, name, status, createdAt, updatedAt }
  }
}

export class IncidentUpdate {
  constructor ({incidentID, incidentUpdateID, incidentStatus, message = '', createdAt = new Date().toISOString(),
                updatedAt = new Date().toISOString()}) {
    this.incidentID = incidentID
    this.incidentUpdateID = incidentUpdateID
    this.incidentStatus = incidentStatus
    this.message = message
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  validate () {
    if (this.incidentUpdateID === undefined || this.incidentUpdateID === '') {
      throw new ValidationError('invalid incidentUpdateID parameter')
    }
    this.validateExceptUpdateID()
  }

  validateExceptUpdateID () {
    if (this.incidentID === undefined || this.incidentID === '') {
      throw new ValidationError('invalid incidentID parameter')
    }

    if (incidentStatuses.indexOf(this.incidentStatus) < 0) {
      throw new ValidationError('invalid incident status parameter')
    }

    if (this.message === undefined) {
      throw new ValidationError('invalid message parameter')
    }

    if (!isValidDate(this.createdAt)) {
      throw new ValidationError('invalid createdAt parameter')
    }

    if (!isValidDate(this.updatedAt)) {
      throw new ValidationError('invalid updatedAt parameter')
    }
  }

  setIncidentUpdateID (incidentUpdateID) {
    this.incidentUpdateID = incidentUpdateID
  }

  objectify () {
    const { incidentID, incidentUpdateID, incidentStatus, message, createdAt, updatedAt } = this
    return { incidentID, incidentUpdateID, incidentStatus, message, createdAt, updatedAt }
  }
}
