const form = document.getElementById('birthdayForm') as HTMLFormElement

form.addEventListener('submit', handleSubmit)

function handleSubmit (evt: SubmitEvent): void {
  evt.preventDefault()
  resetFormErrorState()

  const fields = Object.fromEntries(new FormData(form)) as Record<string, string>
  const providedDate = concatDateFields(fields)

  if (!dateValidations(fields, providedDate)) return

  const results = calculateResults(providedDate)
  fillResults(results)
}

const concatDateFields = (fields: Record<string, string>): string => {
  const { day, month, year } = fields

  // Format date to match YYYY-MM-DD
  return `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

function dateValidations (fields: Record<string, string>, formattedDate: string): boolean {
  const { year, month, day } = fields
  const fieldsKeys = Object.keys(fields)
  const fieldsValues = Object.values(fields)
  const currentYear = new Date().getFullYear()
  const numberDay = Number(day)
  const numberMonth = Number(month)
  const numberYear = Number(year)
  const minMonths = 1
  const maxMonths = 12

  let yearValidation = true
  let monthValidation = true
  let dayValidation = true

  // 1. Check if all fields are empty if so:
  //  -- Check if provided date is in the future
  //  -- Check if provided date is valid
  if (
    !fieldsValues.some(value => value !== '') &&
    (new Date(formattedDate).getTime() > new Date().getTime() ||
    isNaN(new Date(formattedDate).getTime()))
  ) {
    setFullFormError('Must be a valid date')
    return false
  }

  // Individual fields validations
  fieldsKeys.forEach(key => {
    const input: HTMLInputElement | null = document.querySelector(`.card__input[name="${key}"`)
    const label = input?.parentElement

    if (isEmpty(fields[key])) {
      setError({ message: 'This field is required', label, input })
      switch (key) {
        case 'year': yearValidation = false
          break
        case 'month': monthValidation = false
          break
        case 'day': dayValidation = false
      }
      return
    }

    switch (key) {
      case 'year':
        // Check if provided year points to the future
        if (numberYear > currentYear) {
          setError({ message: 'Must be in the past', label, input })
          yearValidation = false
        }
        break
      case 'month':

        // Check if month is in valid range
        if (
          numberMonth < minMonths ||
          numberMonth > maxMonths
        ) {
          setError({ message: 'Must be a valid month', label, input })
          monthValidation = false
        }
        break
      case 'day':
        // 1. Check if day is more than zero
        // 2. Check if day exceeds maximum ammount of days of provided month
        if (
          numberDay < 1 ||
          (new Date(year !== '0000' ? numberYear : currentYear, numberMonth, 0).getDate() < numberDay)
        ) {
          setError({ message: 'Must be a valid day', label, input })
          dayValidation = false
        }
        break
    }
  })

  // All three validations should be correct in order to continue
  return dayValidation && monthValidation && yearValidation
}

interface resultTypes {
  years: number
  months: number
  days: number
}

function calculateResults (providedDate: string): resultTypes {
  const birthDate = new Date(providedDate)
  const today = new Date()

  const timePassed = today.getTime() - birthDate.getTime()
  const daysPassed = Math.ceil(timePassed / (1000 * 60 * 60 * 24))
  const years = Math.floor(daysPassed / 365)
  let months = 0
  let days = 0

  // Calculate the number of months and days based on the remaining days
  let remainingDays = daysPassed - (years * 365)
  while (remainingDays > 0) {
    const tempDate = new Date(providedDate)
    tempDate.setFullYear(birthDate.getFullYear() + years, birthDate.getMonth() + months, 0)
    const daysInMonth = tempDate.getDate()

    if (remainingDays >= daysInMonth) {
      months++
      remainingDays -= daysInMonth
    } else {
      days = remainingDays
      remainingDays = 0
    }
  }

  return { years, months, days }
}

function fillResults (results: resultTypes): void {
  const { years, months, days } = results
  const yearsResult = document.getElementById('years_result')
  const monthsResult = document.getElementById('months_result')
  const daysResult = document.getElementById('days_result')

  if (yearsResult != null) yearsResult.textContent = years.toString()
  if (monthsResult != null) monthsResult.textContent = months.toString()
  if (daysResult != null) daysResult.textContent = days.toString()
}

interface errorTypes {
  message: string
  label?: HTMLElement | null | undefined
  input?: HTMLInputElement | null
}

const setError = ({ message, label, input }: errorTypes): void => {
  const errorParaph = document.createElement('p')
  errorParaph.classList.add('card__error')
  errorParaph.textContent = message

  label?.classList.add('card__label--error')
  input?.classList.add('card__input--error')
  label?.appendChild(errorParaph)
}

const setFullFormError = (message: string): void => {
  const labels = document.querySelectorAll('.card__label')
  const inputs = document.querySelectorAll('.card__input')

  const errorParaph = document.createElement('p')
  errorParaph.classList.add('card__error')
  errorParaph.textContent = message

  handleClassesOfHTMLCollection(labels, 'add', 'card__label--error')
  handleClassesOfHTMLCollection(inputs, 'add', 'card__input--error')

  document.querySelector('.card__formContainer')?.appendChild(errorParaph)
}

const resetFormErrorState = (): void => {
  const labels = document.querySelectorAll('.card__label')
  const inputs = document.querySelectorAll('.card__input')
  const errors = document.querySelectorAll('.card__error')

  handleClassesOfHTMLCollection(labels, 'remove', 'card__label--error')
  handleClassesOfHTMLCollection(inputs, 'remove', 'card__input--error')
  removeElements(errors)
}

const handleClassesOfHTMLCollection = (HTMLCollection: NodeListOf<Element>, method: string, className: string): void => {
  HTMLCollection.forEach(element => {
    switch (method) {
      case 'add':
        element.classList.add(className)
        break
      case 'remove':
        element.classList.remove(className)
        break
    }
  })
}

const removeElements = (HTMLCollection: NodeListOf<Element>): void => {
  HTMLCollection.forEach(element => {
    element.remove()
  })
}

const isEmpty = (string: string): boolean => {
  return string === ''
}
