'use client'

import { PrimaryButton } from "@/src/components/Button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      Score thing
      <PrimaryButton onClick={handleHomeClick}>Home</PrimaryButton>
    </main>
  )
}

export default Page;
