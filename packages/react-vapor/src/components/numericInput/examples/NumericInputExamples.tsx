import * as React from 'react';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {NumericInputConnected} from '../NumericInputConnected';

const NumericInputExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Numeric Input</label>
            <div className="form-control">
                <NumericInputConnected id="numeric-1" />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Numeric Input with an initial value of 5</label>
            <div className="form-control">
                <NumericInputConnected id="numeric-2" initialValue={5} />
            </div>
        </div>

        <div className="form-group">
            <label className="form-control-label">Numeric Input with an initial value of 50 & a step of 25</label>
            <div className="form-control">
                <NumericInputConnected id="numeric-3" initialValue={50} step={25} />
            </div>
        </div>

        <div className="form-group">
            <label className="form-control-label">
                Numeric Input with an initial value of 50, a step of 25, a min of 25 and a max of 300
            </label>
            <div className="form-control">
                <NumericInputConnected
                    id="numeric-4"
                    initialValue={500}
                    step={25}
                    min={25}
                    max={999}
                    maxLength={3}
                    invalidMessage="The value must be between 25 and 999."
                />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Numeric Input with a width for only 2 digits</label>
            <div className="form-control">
                <NumericInputConnected
                    id="numeric-5"
                    initialValue={20}
                    step={1}
                    min={0}
                    max={99}
                    maxLength={2}
                    invalidMessage="The value must be between 0 and 99."
                />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Numeric Input with a width for only 4 digits</label>
            <div className="form-control">
                <NumericInputConnected
                    id="numeric-6"
                    initialValue={5000}
                    step={25}
                    min={25}
                    max={9999}
                    maxLength={4}
                    invalidMessage="The value must be between 25 and 7000."
                />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Numeric Input with a width for only 10 digits</label>
            <div className="form-control">
                <NumericInputConnected
                    id="numeric-7"
                    initialValue={5000000000}
                    step={10000}
                    min={0}
                    max={9999999999}
                    maxLength={10}
                    invalidMessage="The value must be between 25 and 7000."
                />
            </div>
        </div>
    </div>
);

export const NumericInputExample: ExampleComponent = NumericInputExamples;
NumericInputExamples.description =
    'Numeric inputs are used to require the input of a numeric value. They can be configured in discrete jumps, when precision is not mandatory (e.g., 0, 5, 10, etc.).';
