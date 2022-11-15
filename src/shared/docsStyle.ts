import { css } from 'styled-components';
import { spacing } from './theme';

export const docsStyle = css`
  .sbdocs {
    &,
    .css-xg0mo1 {
      margin: 0 !important;
      padding: 0 !important;
    }

    .sbdocs-content {
      padding: ${spacing.larger}px !important;
    }

    .sbdocs-ul {
      margin-left: ${spacing.larger}px !important;
    }

    .sbdocs-li {
      list-style: unset !important;
    }

    .sbdocs-pre > div {
      margin: 0 !important;
    }

    h1.sbdocs,
    h2.sbdocs,
    h4.sbdocs,
    h5.sbdocs,
    h6.sbdocs {
      margin-block: ${spacing.medium}px !important;
    }

    h2.sbdocs {
      padding-bottom: ${spacing.xsmall}px !important;
    }

    h3.sbdocs {
      margin-block: ${spacing.small}px !important;
    }
  }
`;
