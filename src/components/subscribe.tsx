'use client'

import { useActionState } from 'react'
import { subscribeUser } from '../../beehiiv/queries'
import { Button } from './button'

export interface FormState {
  message: string
}

const initialState: FormState = {
  message: '',
}

export default function Subscribe() {
  const [state, formAction, isPending] = useActionState(
    subscribeUser,
    initialState,
  )
  return (
    <form className="w-full" action={formAction}>
      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          className="relative inline-flex w-full items-center justify-center rounded-full border border-transparent bg-white px-4 py-[calc(--spacing(2)-1px)] ring-1 shadow-md ring-[#7F9AF9]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]"
        />
        <Button
          type="submit"
          className="hover:cursor-pointer"
          disabled={isPending}
        >
          {isPending ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      <p
        className={`mx-4 mt-2 text-sm ${!state.message && 'cursor-default opacity-0'}`}
      >
        <strong
          className={`${state.message === 'success' && 'text-[#5C14D8]'} ${state.message === 'error' && 'text-red-500'}`}
        >
          {state.message.toUpperCase()}.{' '}
        </strong>
        {state.message === 'success' && 'Check your inbox 😎'}
        {state.message === 'error' && 'Please try again.'}
      </p>
    </form>
  )
}
