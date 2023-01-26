export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function uniqueId() {
  return Math.floor((Date.now() * Math.random())).toString(16)
}

export async function typer(element: HTMLElement, text: string) {
  for (let i = 0; i < text.length; i++) {
    element.textContent += text.charAt(i)
    await sleep(100)
  }
}

export async function fetcher(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data: unknown = await response.json()
    return data
  }
  catch (error) {
    console.error(`Could not fetch data: ${error}`)
  }
}


export function loader(element: HTMLElement) {
  return element
}