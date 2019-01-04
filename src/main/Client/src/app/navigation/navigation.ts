import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Home',
                type     : 'item',
                icon     : 'home',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'administracao',
                title    : 'Administração',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'cliente',
                        title: 'Cadastro de Cliente',
                        type : 'item',
                        url  : '/cliente'
                    },
                    {
                        id   : 'veiculo',
                        title: 'Cadastro de Veículo',
                        type : 'item',
                        url  : '/veiculo'
                    },
                    {
                        id   : 'agencia',
                        title: 'Cadastro de Agência',
                        type : 'item',
                        url  : '/agencia'
                    }
                    ]
            },
            {
                id       : 'produto',
                title    : 'Gestão de Produtos',
                type     : 'collapsable',
                icon     : 'apps',
                children : [
                    {
                        id   : 'produto',
                        title: 'Cadastro de Produtos',
                        type : 'item',
                        url  : '/produto'
                    },
                    {
                        id   : 'TipoMidia',
                        title: 'Cadastro de Tipos de Mídia',
                        type : 'item',
                        url  : '/tipomidia'
                    },
                    {
                        id   : 'material',
                        title: 'Cadastro de Material',
                        type : 'item',
                        url  : '/material'
                    },
                    {
                        id   : 'formatos',
                        title: 'Cadastro de Formatos',
                        type : 'item',
                        url  : '/formato'
                    },
                ]
            },
            {
                id       : 'midia',
                title    : 'Produção de Mídia',
                type     : 'collapsable',
                icon     : 'description',
                children : [
                    {
                        id   : 'planomidia',
                        title: 'Plano de Mídia',
                        type : 'item',
                        url  : '/planomidia'
                    },
                    {
                        id   : 'PedidoInsercao',
                        title: 'Pedidos de Inserção',
                        type : 'item',
                        url  : '/pedidoinsercao'
                    },
                    {
                        id   : 'campanha',
                        title: 'Campanha',
                        type : 'item',
                        url  : '/campanha'
                    }
                ]
            },
            {
                id       : 'relatorio',
                title    : 'Relatórios Gerenciais',
                type     : 'collapsable',
                icon     : 'account_balance_wallet',
                children : [
                    {
                        id   : 'realt',
                        title: 'Plano de Mídia',
                        type : 'item',
                        url  : '/rel1'
                    },
                    {
                        id   : 'PedidoInsercao',
                        title: 'Pedidos de Inserção',
                        type : 'item',
                        url  : '/rel2'
                    },
                    {
                        id   : 'campanha',
                        title: 'Campanha',
                        type : 'item',
                        url  : '/rel3'
                    }
                ]
            },
        ]
    },
    {
        id       : 'configuracoes',
        title    : 'Configurações',
        type     : 'group',
        children : [
            {
                id       : 'sistema',
                title    : 'Configurações do sistema',
                type     : 'collapsable',
                icon     : 'account_balance_wallet',
                children : [
                    {
                        id   : 'usuario',
                        title: 'Cadastro de usuários',
                        type : 'item',
                        url  : '/operador'
                    },
                ]
            },
        ]
    }
];
