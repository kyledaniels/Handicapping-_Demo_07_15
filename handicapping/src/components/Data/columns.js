import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Player Id",
        accessor: "playerId"
      },
      {
        Header: "Player Name",
        accessor: "playerName"
      },
      {
        Header: "Total Bets",
        accessor: "totalBets"
      },
      {
        Header: "Winnings",
        accessor: "winnings"
      },
      {
        Header: "Mandatory Placed",
        accessor: "mandatoryCount"
      },
      {
        Header: "Optional Placed",
        accessor: "optionalCount"
      }
      
    ],
    []
  );

  return columns;
}

