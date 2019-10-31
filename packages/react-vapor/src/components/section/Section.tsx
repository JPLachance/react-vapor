import * as classNames from 'classnames';
import * as React from 'react';

type SectionMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface ISectionProps {
    title?: string;
    description?: React.ReactNode;
    className?: string;
    mods?: SectionMods | SectionMods[];
    level?: 1 | 2 | 3;
}

export const Section: React.FunctionComponent<ISectionProps> = ({
    children,
    title,
    description,
    className,
    mods,
    level,
}) => {
    const titleProps: React.HTMLProps<HTMLElement> = {
        className: 'text-medium-blue mb2',
        children: title,
    };
    const H = `h${(level || 1) + 1}`;
    return (
        <fieldset className={classNames(className, mods, `level-${level || 1} form-group mod-padding-children`)}>
            {title && <H {...titleProps} />}
            {description && <p className="description">{description}</p>}
            {children}
        </fieldset>
    );
};
