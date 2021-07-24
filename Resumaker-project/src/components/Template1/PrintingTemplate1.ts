export const template1PageStyle = `
  @media all {
    .page-break {
      display:none;
    }
  }

  @media print {
    html, body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }

    .template1-header-button,
    .template1-nav,
    .template1-contact,
    .template1-social-media-image {
      display:none;    
    }

    .template1-tabs-contents,
    .template1-work-exp-flex-box,
    .template1-education-flex-box,
    .template1-additional-info {
      text-align: center;
      width: 60%;
      margin: 0 auto;
    }    
  }

  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      break-before: page;
    }
  }

  @page {
    size: auto;
    margin: 20mm;
  }
`;
