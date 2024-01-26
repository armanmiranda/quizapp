'use client'

import { PrimaryButton } from "@/src/components/Button";
import { Header, SubHeader, ContentText } from "@/src/components/Typography";
import { useRouter } from "next/navigation";

const scoreRecommendationContainerClasses = [
  'max-sm:w-screen',
  'max-sm:h-screen',
  'border',
  'border-black',
  'border-solid',
  'w-9/12',
  'flex',
  'flex-col',
  'items-center',
  'border',
  'border-solid',
  'border-black',
  'p-5',
  'gap-6'
].join(" ");

const Page = () => {
  const router = useRouter();
  const recommendation = [
    { id: '1', programLevel: 'B2', programName: 'First' },
    { id: '2', programLevel: 'C1', programName: 'Advanced' },
    { id: '3', programLevel: 'B2', programName: 'First for Schools' },
    { id: '4', programLevel: 'B1', programName: 'Preliminary for Schools' },
    { id: '5', programLevel: 'A2', programName: 'Key for Schools' },
  ];

  const handleHomeClick = () => {
    router.push('/');
  }

  return (
    <main className={scoreRecommendationContainerClasses}>
      <div className="flex flex-col gap-6 justify-center items-center border-b border-solid border-slate-300 pb-5">
        <SubHeader content={'Score'} />
        <Header content={'80%'} />
        <ContentText content={'You got 5 of the 6 questions right!'} />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <SubHeader content={"What's Next?"} />
        <ContentText content="We recommend you take your learning to the next step with:"/>
        <div className="flex flex-wrap gap-6">
          {recommendation.map((recommendation) => {
            return (
              <div
                key={recommendation.id}
                className='flex flex-col justify-center items-center border-4 border-solid border-blue-400 text-blue-700/75 h-[90px] w-[90px]'>
                <p>{recommendation.programLevel}</p>
                <p className="text-center text-sm">{recommendation.programName}</p>
              </div>
            )
          })}
        </div>
      </div>
      <PrimaryButton onClick={handleHomeClick}>Home</PrimaryButton>
    </main>
  )
}

export default Page;
