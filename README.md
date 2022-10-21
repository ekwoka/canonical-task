# Canonical Interview Task Submission

## QuickStart

1. Clone the repo: `git clone https://github.com/ekwoka/canonical-task`
2. Open `dist/index.html` with LiveServer

To build the output yourself:

```bash
pnpm i
pnpm run build
```

## Details

This uses a custom JSX-based pre-renderer with Vanilla Framework for the bulk of the styling. During the pre-render process, blog post data is loaded and processed into DOM for the output html.

## Challenges

The biggest challenge was getting familiar with Vanilla Framework. The Documentation is difficult to get around, so I mostly resorted to using find in vscode to see if there were any classes that did something like what I was looking for. Custom utility classes were utilized when I couldn't find a close enough match.

The rest was all pretty normal.

I had wanted to pursue a pre-rendered approach to this task from the beginning, but I started just working with in-browser JS, but the api endpoint was impossible to use in such a manner due to CORS, so in place of needing a webserver to middle-man that api, I pivoted to static gen with a custom JSX factory and HTML generator.
