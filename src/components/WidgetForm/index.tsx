import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: { 
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: { 
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: { 
      source: thoughtImageUrl,
      alt: 'Imagem de um balao de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm(){
  const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
 
      {!feedBackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType}/>
      ) : (
        <FeedbackContentStep feedBackType={feedBackType}/>
      )}

      <footer className="underline underline-offset-2">
        Feito com ♥ pela <a href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
}