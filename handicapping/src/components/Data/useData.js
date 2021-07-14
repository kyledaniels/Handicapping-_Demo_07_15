import { useMemo } from "react";

export default function useData() {
  const data = useMemo(
    () =>  [
        {
           "playerId" : 1,
           "playerName" : "foo",
           "totalBets" : 7,
           "winnings" : 400,
           "mandatoryCount" : 5,
           "optionalCount" : 2
         },
         {
           "playerId" : 2,
           "playerName" : "bar",
           "totalBets" : 6,
           "winnings" : 300,
           "mandatoryCount" : 5,
           "optionalCount" : 1
         } 
         
       ],
    []
  );

  return data;
}
