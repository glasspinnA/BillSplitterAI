import { BookDTO } from "../DTO/Book";
import { QuoteDTO } from "../DTO/Quote";

export const dummyBooks = [
  { id: "1", title: "Book of Boba", author: "James", numberQuotes: 4 },
  { id: "2", title: "Book of Yoda", author: "Yoda", numberQuotes: 3 },
] as BookDTO[];

export const dummyQuotes = [
  {
    id: "1",
    title: "Book of Boba",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ex luctus, molestie felis et, tincidunt massa. Nunc volutpat dui nec quam rutrum aliquam. Nullam vulputate quam eu dui fermentum, eget feugiat nibh semper. In in tortor at felis consectetur eleifend sed eget sem. Aliquam vel mollis metus, at varius ante. Integer a volutpat libero. Fusce facilisis ultrices sem, sed pellentesque nisl accumsan ut. Vivamus auctor nisi imperdiet, lacinia diam quis, sollicitudin risus. Praesent nec gravida nibh. Integer egestas odio ut vulputate sollicitudin. Aenean est augue, volutpat aliquam ante in, dignissim placerat nunc. Aliquam tempor cursus ipsum. In interdum id mi id lobortis.",
    createdDate: new Date(),
  },
  {
    id: "2",
    text: "Pellentesque eget dui est. Cras molestie nibh a vestibulum tincidunt. Cras suscipit ligula mi, eget interdum ex hendrerit ut. Phasellus scelerisque semper erat ac iaculis. Integer et purus sed ante dignissim posuere. Curabitur nec leo ut quam accumsan rhoncus ut porttitor nibh. Nullam posuere libero ut arcu efficitur ultrices quis vitae quam. Maecenas convallis tortor odio, vitae laoreet risus rhoncus sed. Aenean diam urna, tincidunt vitae nisi suscipit, elementum venenatis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum mi sed nibh lacinia convallis. Vestibulum pretium dictum dolor, nec feugiat quam ultrices lobortis. Integer nec tortor sollicitudin, faucibus ante eu, aliquet orci. Ut vitae eros ullamcorper, volutpat orci non, pharetra felis. In facilisis felis id dignissim varius.",
    createdDate: new Date(),
  },
] as QuoteDTO[];
