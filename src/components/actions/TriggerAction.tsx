import { IUserChoice } from '../inlinePrompt/InlinePrompt';
import { IBasicActionProps, Action, IConfirmData } from './Action';
import * as React from 'react';

export interface ITriggerActionOwnProps extends React.ClassAttributes<TriggerAction>, IBasicActionProps {
  confirmLabel?: string;
  parentId?: string;
}

export interface ITriggerActionDispatchProps {
  onTriggerConfirm?: (onClick: () => void, userChoice: IUserChoice, className: string) => void;
  onConfirm?: () => void;
  onCloseDropdown?: () => void;
}

export interface ITriggerActionProps extends ITriggerActionOwnProps, ITriggerActionDispatchProps { }

export const CONFIRM_LABEL: string = 'Are you sure?';

export class TriggerAction extends React.Component<ITriggerActionProps, any> {

  private onTriggerAction() {
    let confirmData: IConfirmData = this.props.action.requiresConfirmation;

    if (confirmData && this.props.onTriggerConfirm) {
      let confirmLabel: string = this.props.confirmLabel || CONFIRM_LABEL;
      let icon: string = this.props.action.icon;

      this.props.onTriggerConfirm(
        () => {
          if (this.props.action.trigger) {
            this.props.action.trigger();
          }
          if (this.props.onConfirm) {
            this.props.onConfirm();
          }
        },
        {
          icon: icon,
          description: confirmLabel,
          cancel: confirmData.buttonLabels.cancel,
          choices: {
            confirm: confirmData.buttonLabels.confirm
          }
        },
        confirmData.confirmType
      );
    } else {
      if (this.props.action.trigger) {
        this.props.action.trigger();
        this.props.onCloseDropdown && this.props.onCloseDropdown();
      }
    }
  }

  render() {
    let actionClasses: string = this.props.action.enabled ? 'enabled' : (this.props.simple ? 'state-disabled' : 'disabled');

    return (
      <span onClick={() => this.onTriggerAction()} className={actionClasses} title={this.props.action.name}>
        <Action action={this.props.action} simple={this.props.simple} />
      </span>
    );
  }
}
