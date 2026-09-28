import { cases } from '../content'
import { TalkRows } from './TalkRows'

/** Hidden until at least one case is added in content.ts. */
export function Cases() {
  if (cases.length === 0) return null
  return <TalkRows id="cases" label="Case competitions" heading="Cases I’ve presented." items={cases} />
}
