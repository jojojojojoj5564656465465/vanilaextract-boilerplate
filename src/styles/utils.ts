import * as v from 'valibot'

export function hoverfn(x: string) {
  return {
    '(hover: hover)': {
      selectors: {
        '&:hover': {
          backgroundColor: x,
        },
      },
    },
    'screen and (max-width: 940px)': {
      selectors: {
        '&:active': {
          backgroundColor: x,
        },
        '&:focus': {
          outline: `4px solid ${x}`,
          outlineOffset: '1px',
        },
      },
    },
  }
}

/**
 * @interface FluidTypeOptions
 * @description Options for fluidType function
 * @property {number} minValue - Minimum value for fluid type calculation
 * @property {number} maxValue - Maximum value for fluid type calculation
 */
interface FluidTypeOptions {
  minValue: number
  maxValue: number
}

/**
 * @function fluidType
 * @description Calculates a fluid value based on the provided options
 * @param {FluidTypeOptions} options - Options for fluid type calculation
 * @returns {string} Clamp value string (e.g. "clamp(10rem, 12rem + 12vw, 20rem)")
 */
export function fluid(minValue: number, maxValue: number) {
    const options: FluidTypeOptions={
      minValue, maxValue
    }

  const valueRem = v.pipe(
    v.number('px must be a number to convert to rem'),
    v.minValue(1, 'min value must be more than 0.5 in valueRem'),
    v.transform(num => num / 16),
    v.description('convert px to rem')
  )

  const SimpleObjectSchema = v.pipe(
    v.object({
      minValue: valueRem,
      maxValue: valueRem,
    }),
    v.partialCheck(
      [['minValue'], ['maxValue']],
      input => input.minValue < input.maxValue,
      'maxValue is less than minValue invert data please',
    ),
  )
  try {
    const { maxValue, minValue } = v.parse(SimpleObjectSchema, options)
    const slope = (maxValue - minValue) / 75 - 20
    const yIntercept = minValue - 20 * slope

    const fluidValue = `${yIntercept.toFixed(2)}rem + ${(slope * 100).toFixed(2)}svw`
    // Generate the clamp value
    const clampValue = `clamp(${minValue.toFixed(2)}rem, ${fluidValue}, ${maxValue.toFixed(2)}rem)`

    return clampValue
  } catch (error) {
    if (error instanceof v.ValiError) {
      console.error('Error Valibot fluidSize', error.issues)
      const fallback = (options.maxValue + options.minValue) / 2
      console.error(
        'fallback value used instead maxValue + minValue / 2 =',
        `${fallback.toFixed(2)}rem`,
      )
      return `${fallback.toFixed(2)}rem`
    }
    console.error('error in fluidSize not Valibot issue', error)
  }
}

