import PropTypes from 'prop-types';
import React from 'react';
import gtmParts from 'react-google-tag-manager';

interface Props {
  gtmId: string;
  dataLayerName?: string;
  additionalEvents?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  previewVariables?: string;
  scriptId?: string;
}

class GoogleTagManager extends React.Component<Props> {
  public static propTypes = {
    gtmId: PropTypes.string.isRequired,
    dataLayerName: PropTypes.string,
    additionalEvents: PropTypes.object,
    previewVariables: PropTypes.string,
    scriptId: PropTypes.string,
  };

  public componentDidMount(): void {
    const dataLayerName = this.props.dataLayerName ?? 'dataLayer';
    const scriptId = this.props.scriptId ?? 'react-google-tag-manager-gtm';

    if (!window[dataLayerName as keyof Window]) {
      const gtmScriptNode = document.getElementById(scriptId);
      if (gtmScriptNode?.textContent) {
        // eslint-disable-next-line no-eval
        eval(gtmScriptNode.textContent);
      }
    }
  }

  public render(): JSX.Element {
    const gtm = gtmParts({
      id: this.props.gtmId,
      dataLayerName: this.props.dataLayerName ?? 'dataLayer',
      additionalEvents: this.props.additionalEvents ?? {},
      previewVariables: this.props.previewVariables ?? false,
    });

    return (
      <div>
        <div>{gtm.noScriptAsReact()}</div>
        <div id={this.props.scriptId ?? 'react-google-tag-manager-gtm'}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    );
  }
}

export default GoogleTagManager;
