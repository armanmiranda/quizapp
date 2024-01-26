'use client'

import { useContext } from "react";
import { redirect, useRouter } from "next/navigation";

import { PrimaryButton } from "@/src/components/Button";
import { Header, SubHeader, ContentText } from "@/src/components/Typography";
import {
  programRecommendationClasses,
  recommendationSectionClasses,
  scoreRecommendationContainerClasses,
  scoreSectionClasses
} from "./constants";
import { DataContext } from "@/src/contexts/dataContext";
import { TRecommendationData } from "@/src/shared/types";

const Page = () => {
  const router = useRouter();
    const { scoreRecommendation } = useContext(DataContext);

  const handleHomeClick = () => {
    router.push('/');
  }

  if (scoreRecommendation.recommendations.length <= 0) redirect('/');

  return (
    <main className={scoreRecommendationContainerClasses}>
      <div className={scoreSectionClasses}>
        <SubHeader content={'Score'} />
        <Header content={`${scoreRecommendation.correctPercentage}%`} />
        <ContentText
          content={
          `You got ${scoreRecommendation.correctCount} of the 6 questions right!`
          } />
      </div>
      <div className={recommendationSectionClasses}>
        <SubHeader content={"What's Next?"} />
        <ContentText content="We recommend you take your learning to the next step with:"/>
        <div className="flex flex-wrap gap-6">
          {scoreRecommendation.recommendations.map((recommendation: TRecommendationData) => {
            return (
              <div
                key={recommendation.id}
                className={programRecommendationClasses}>
                <p>{recommendation.programCode}</p>
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
