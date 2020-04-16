import PropTypes from 'prop-types';
import React from 'react';
import gtmParts from 'react-google-tag-manager';

interface Props {
  gtmId: string;
  dataLayerName?: string;
  additionalEvents?: any;
  previewVariables?: string;
  scriptId?: string;
}

class GoogleTagManager extends React.Component<Props> {
  static propTypes = {
    gtmId: PropTypes.string.isRequired,
    dataLayerName: PropTypes.string,
    additionalEvents: PropTypes.object,
    previewVariables: PropTypes.string,
    scriptId: PropTypes.string
  };

  componentDidMount(): void {
    const dataLayerName = this.props.dataLayerName || 'dataLayer';
    const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';

    if (!window[dataLayerName as keyof Window]) {
      const gtmScriptNode = document.getElementById(scriptId);
      if (gtmScriptNode?.textContent) {
        eval(gtmScriptNode.textContent);
      }
    }
  }

  render(): JSX.Element {
    const gtm = gtmParts({
      id: this.props.gtmId,
      dataLayerName: this.props.dataLayerName || 'dataLayer',
      additionalEvents: this.props.additionalEvents || {},
      previewVariables: this.props.previewVariables || false,
    });

    return (
      <div>
        <div>{gtm.noScriptAsReact()}</div>
        <div id={this.props.scriptId || 'react-google-tag-manager-gtm'}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    );
  }
}

export default GoogleTagManager;
