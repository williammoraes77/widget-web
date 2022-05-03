import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedBackType: FeedbackType; 
}

export function FeedbackContentStep({feedBackType}:FeedbackContentStepProps){
  const feedBackTypeInfo = feedbackTypes[feedBackType];
  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute">
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2">
      
      </div>
    </>
  )
}