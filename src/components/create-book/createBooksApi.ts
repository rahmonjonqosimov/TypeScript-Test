// fetchBookInfo.ts

interface BookInfo {
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks: {
    thumbnail: string;
  };
}

export const fetchBookInfoByISBN = async (
  isbn: string
): Promise<BookInfo | null> => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const book = data.items[0].volumeInfo;

    return {
      title: book.title,
      authors: book.authors,
      publishedDate: book.publishedDate,
      description: book.description,
      pageCount: book.pageCount,
      categories: book.categories,
      imageLinks: book.imageLinks,
    };
  } catch (error) {
    console.error("Failed to fetch book info:", error);
    return null;
  }
};
