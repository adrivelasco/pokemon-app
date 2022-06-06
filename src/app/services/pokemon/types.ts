import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type Collection<ResultsType = unknown> = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ResultsType[];
};

export type CustomQuery<ResultsType> = QueryReturnValue<
  ResultsType,
  FetchBaseQueryError,
  FetchBaseQueryMeta
>;
