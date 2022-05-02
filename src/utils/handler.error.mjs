const DEFAULT_HEADER = { 'Content-Type': 'application/json' };
export const handlerError = (response) => {
    return (error) => {
      ``;
      console.log(error);
      response.writeHead(500, DEFAULT_HEADER);
      response.write(JSON.stringify({ error: 'Internal server error' }));
      return response.end();
    };
  };