'use client';
import {
  Box,
  Button,
  DisplayItem,
  Drawer,
  InputField,
  ListItemContent,
  ListItemNavigation,
  PageContainer,
  PageHeader,
  Tag,
  Text,
} from '@stone-payments/jade';
import { useEffect, useState } from 'react';

import analiticaEvents from './analitica';

export default function Home() {
  const [drawerState, setDrawerState] = useState<
    'closed' | 'approved' | 'canceled'
  >('closed');

  useEffect(() => {
    analiticaEvents.events.view.onLoad();
  }, []);

  return (
    <>
      <PageHeader label="Demo App"></PageHeader>
      <div className="flex center">
        <PageContainer size="narrow">
          <div className="stack gap-3">
            <Box hasPadding>
              <Text as="h1" variant="heading-small">
                Listagem
              </Text>
              <Text variant="text-medium" weight="regular" color="medium">
                Exemplo de tela de listagem usando guidelines do JadeDS.
              </Text>
            </Box>
            <Box hasPadding>
              <InputField
                leadingItem={{ type: 'icon', content: 'action-search' }}
                placeholder="Buscar"
                label=""
              ></InputField>
              <Drawer
                open={drawerState !== 'closed'}
                toggle={() => {
                  setDrawerState('closed');
                }}
                title="Detalhe"
                trailingAction={{
                  icon: 'action-download',
                  onClick: () => alert('action'),
                }}
                trigger={Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <ListItemNavigation
                      key={i}
                      leftContentText="Text value"
                      leftContentSupport="21 mai 2023 • 12:50"
                      onClick={() =>
                        setDrawerState(i % 2 ? 'approved' : 'canceled')
                      }
                      trailing={
                        <Text variant="text-medium" color="medium">
                          Value
                        </Text>
                      }
                    />
                  ))}
              >
                <Box hasPadding>
                  <div className="stackg gap-1">
                    <DisplayItem
                      value="R$ 10, 00"
                      label="Valor"
                      support="13 jul 2023 às 14:30"
                    ></DisplayItem>
                    <div className="flex">
                      <Tag
                        variant={
                          drawerState === 'approved' ? 'positive' : 'negative'
                        }
                        size="small"
                      >
                        {drawerState === 'approved' ? 'Aprovado' : 'Cancelado'}
                      </Tag>
                    </div>
                  </div>
                </Box>
                <Box hasPadding>
                  <div className="stack gap-1">
                    <Text variant="heading-xsmall">Dados do pagamento</Text>
                    <ListItemContent
                      label="Forma de pagamento"
                      text="Crédito"
                    />
                    <ListItemContent label="Bandeira" text="Visa" />
                    <ListItemContent
                      label="Nº do cartão"
                      text="4775 87** **** 9991"
                    />
                    <ListItemContent label="Stone ID" text="89749038490" />
                    <ListItemContent
                      label="Código da autorização"
                      text="U2CZFG"
                    />
                  </div>
                </Box>
                <Box hasPadding>
                  <div className="stack gap-1">
                    <Text variant="heading-xsmall">Origem</Text>
                    <ListItemContent
                      label="Meio de captura"
                      text="Maquininha"
                    />
                    <ListItemContent label="Número de série" text="32431234" />
                  </div>
                </Box>
                <Box hasPadding>
                  <Button variant="primary-solid">Primary action</Button>
                </Box>
              </Drawer>
            </Box>
          </div>
        </PageContainer>
      </div>
    </>
  );
}
