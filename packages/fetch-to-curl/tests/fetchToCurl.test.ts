import { describe, it, expect } from "vitest";

import fetchToCurl from "..";

describe("fetchToCurl", () => {
  it("should convert a simple fetch request to curl", () => {
    const fetchString = `fetch("https://example.com", {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(
      `curl -X GET "https://example.com" -H "Accept: application/json"`
    );
  });

  it("should handle a POST request with a JSON body", () => {
    const fetchString = `fetch("https://example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "key": "value"
      }
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(
      `curl -X POST "https://example.com" -H "Content-Type: application/json" -d '{"key":"value"}'`
    );
  });

  it("should handle a request with no options argument", () => {
    const fetchString = `fetch("https://example.com")`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(`curl -X GET "https://example.com"`);
  });

  it("should throw an error for an invalid fetch string format", () => {
    const fetchString = `fetch("https://example.com", invalidOptions)`;

    expect(() => fetchToCurl(fetchString)).toThrowError(
      "Invalid fetch string format"
    );
  });

  it("should throw an error for invalid JSON in options", () => {
    const fetchString = `fetch("https://example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        key: value // Missing quotes around key and value
      }
    })`;

    expect(() => fetchToCurl(fetchString)).toThrowError(
      "Failed to parse fetch options"
    );
  });

  it("should handle a request with multiple headers", () => {
    const fetchString = `fetch("https://example.com", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer token",
        "Content-Type": "application/json"
      }
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(
      `curl -X PUT "https://example.com" -H "Authorization: Bearer token" -H "Content-Type: application/json"`
    );
  });

  it("should handle a DELETE request with no body", () => {
    const fetchString = `fetch("https://example.com", {
      method: "DELETE"
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(`curl -X DELETE "https://example.com"`);
  });

  it("should handle a string body", () => {
    const fetchString = `fetch("https://example.com", {
      method: "POST",
      body: "raw text data"
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(
      `curl -X POST "https://example.com" -d 'raw text data'`
    );
  });

  it("should handle headers with special characters", () => {
    const fetchString = `fetch("https://example.com", {
      headers: {
        "X-Custom-Header": "SpecialValue!@#$%^&*()"
      }
    })`;

    const result = fetchToCurl(fetchString);

    expect(result).toBe(
      `curl -X GET "https://example.com" -H "X-Custom-Header: SpecialValue!@#$%^&*()"`
    );
  });
});
