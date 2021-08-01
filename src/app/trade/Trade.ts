export interface AdvanceDecline {
  stockAdvancedCount?: number;
  stockAdvancedPercentage?: number;
  stockDeclineCount?: number;
  stockDeclinePercentage?: number;
  stockUnchangedCount?: number;
  stockUnchangedPercentage?: number;
}

export interface TotalCallsPuts {
  totalCalls: number;
  totalCallsNewAdditions: number;
  totalCallsPercentageChange: number;
  totalPuts: number;
  totalPutsNewAdditions: number;
  totalPutsPercentageChange: number;
  pcrTotalContracts: number;
  pcrNewAdditions: number;
  totalContractsSentiments: string;
  newAdditionsSentiments: string;
}

export interface HighestCall {
  strike1: number;
  strike2: number;
  strike3: number;
  numContracts1: number;
  numContracts2: number;
  numContracts3: number;
  changeContract1: number;
  changeContract2: number;
  changeContract3: number;
  percentageChange1: number;
  percentageChange2: number;
  percentageChange3: number;
}

export interface HighestPut {
  strike1: number;
  strike2: number;
  strike3: number;
  numContracts1: number;
  numContracts2: number;
  numContracts3: number;
  changeContract1: number;
  changeContract2: number;
  changeContract3: number;
  percentageChange1: number;
  percentageChange2: number;
  percentageChange3: number;
}

export interface Trade {
  sector?: string;
  advanceDecline?: AdvanceDecline;
  totalCallsPuts?: TotalCallsPuts;
  highestCall?: HighestCall;
  highestPut?: HighestPut;
}
