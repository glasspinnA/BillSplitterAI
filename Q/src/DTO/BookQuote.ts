import { BookDTO } from "./Book";
import { QuoteDTO } from "./Quote";

export interface BookQuoteDTO {
  book: BookDTO;
  quotes: QuoteDTO[];
}
