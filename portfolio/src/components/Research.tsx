import { research } from '../content'
import { TalkRows } from './TalkRows'

export function Research() {
  return <TalkRows id="research" label="Research" heading="What I’m researching." items={research} />
}
