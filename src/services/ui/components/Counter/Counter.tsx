import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../store/counterSlice/counterSlice'
import { RootState } from '../../../store/store'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
