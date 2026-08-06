import { redirect } from 'next/navigation';

export default function WashingMachinePage() {
  redirect('/'); // Or redirect to a default brand like redirect('/washing-machine/lg');
}