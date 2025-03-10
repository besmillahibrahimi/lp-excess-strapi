import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContent extends Struct.ComponentSchema {
  collectionName: 'components_common_contents';
  info: {
    description: '';
    displayName: 'content';
    icon: 'apps';
  };
  attributes: {
    asCard: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    background: Schema.Attribute.String;
    border: Schema.Attribute.String;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    platform: Schema.Attribute.Component<'fields.platform', false>;
    width: Schema.Attribute.Enumeration<
      [
        'w-full',
        'w-1/2',
        'w-2/5',
        'w-3/5',
        'w-1/3',
        'w-2/3',
        'w-1/4',
        'w-3/4',
        'w-1/5',
        'w-4/5',
        'w-1/6',
        'w-5/6',
      ]
    > &
      Schema.Attribute.DefaultTo<'w-full'>;
  };
}

export interface CommonGrid extends Struct.ComponentSchema {
  collectionName: 'components_common_grids';
  info: {
    description: '';
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    children: Schema.Attribute.Component<'common.content', true> &
      Schema.Attribute.Required;
    desktopColumns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
        },
        number
      >;
    gaps: Schema.Attribute.Integer;
    gapsX: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    gapsY: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      >;
    mobileColumns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
        },
        number
      >;
    platform: Schema.Attribute.Component<'fields.platform', false>;
    rows: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    tabletColumns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
        },
        number
      >;
  };
}

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    background: Schema.Attribute.String;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    notice: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Offer varies by state. Must qualify.'>;
    platform: Schema.Attribute.Component<'fields.platform', true>;
  };
}

export interface FieldsPlatform extends Struct.ComponentSchema {
  collectionName: 'components_fields_platforms';
  info: {
    displayName: 'Platform';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'transient',
        'wic1w',
        'ssi1w',
        'medicaid1w',
        'medical1w',
        'calfresh1w',
        'snap1w',
        'ebt1w',
        'california',
        'main',
        'main1w',
        'byop1w',
        'sim1w',
        'tribal',
        'getlifeline',
        'gov1w',
        'excstep',
        'excstp',
        'hispanic1w',
        'infinitiex',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'main'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.content': CommonContent;
      'common.grid': CommonGrid;
      'common.hero': CommonHero;
      'fields.platform': FieldsPlatform;
    }
  }
}
