export async function get(url: string, init?: RequestInit): Promise<any> {
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error('API response not OK, url: ' + url);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Failed to get API response: ' + error);
    throw error;
  }
}
