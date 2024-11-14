type FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: string | Record<string, unknown>;
};

export default function fetchToCurl(fetchString: string): string {
  const pattern = /fetch\(\s*["']([^"']+)["']\s*,\s*(\{[\s\S]*\})\s*\)/;
  const match = fetchString.trim().match(pattern);

  if (!match) {
    throw new Error("Invalid fetch string format");
  }

  const url = match[1];
  let options: FetchOptions = {};

  // Only attempt to parse options if it exists
  if (match[2].trim()) {
    try {
      const sanitizedOptions = match[2]
        .replace(/(\w+):/g, '"$1":') // Add quotes around property names
        .replace(/'/g, '"'); // Convert single quotes to double quotes
      options = JSON.parse(sanitizedOptions);
    } catch (error) {
      throw new Error("Failed to parse fetch options");
    }
  }

  const method = (options.method || "GET").toUpperCase();
  const headers = options.headers || {};
  let body = options.body;

  // Initialize the curl command with the HTTP method and URL
  let curlCommand = `curl -X ${method} "${url}"`;

  // Add headers to the curl command
  for (const [key, value] of Object.entries(headers)) {
    curlCommand += ` -H "${key}: ${value}"`;
  }

  if (body) {
    if (typeof body === "object") {
      body = JSON.stringify(body);
    }
    curlCommand += ` -d '${body}'`;
  }

  return curlCommand;
}
