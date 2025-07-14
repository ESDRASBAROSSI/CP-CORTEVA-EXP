
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function CropGuardPro() {
  const [protocolos, setProtocolos] = useState([]);
  const [novoProtocolo, setNovoProtocolo] = useState({
    areaComercial: "",
    distrito: "",
    territorio: "",
    rsl: "",
    dsm: "",
    rc: "",
    promotor: "",
    canal: "",
    agricultor: "",
    cpfCnpj: "",
    municipio: "",
    tipo: "",
    notas: ""
  });

  const adicionarProtocolo = () => {
    setProtocolos([...protocolos, novoProtocolo]);
    setNovoProtocolo({
      areaComercial: "",
      distrito: "",
      territorio: "",
      rsl: "",
      dsm: "",
      rc: "",
      promotor: "",
      canal: "",
      agricultor: "",
      cpfCnpj: "",
      municipio: "",
      tipo: "",
      notas: ""
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CropGuard Pro - experimental-corteva</h1>
      <Tabs defaultValue="perfil">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="culturas">Culturas</TabsTrigger>
          <TabsTrigger value="protocolos">Protocolos</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil">
          <Card className="mt-4">
            <CardContent className="p-4 space-y-2">
              <Input placeholder="Nome do Produtor" />
              <Input placeholder="CPF ou CNPJ" />
              <Input placeholder="Endereço" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="culturas">
          <Card className="mt-4">
            <CardContent className="p-4 space-y-2">
              <Input placeholder="Cultura (ex: soja, milho, café...)" />
              <Input placeholder="Área em ha" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocolos">
          <Card className="mt-4">
            <CardContent className="p-4 space-y-2">
              <h2 className="font-semibold">Novo Protocolo</h2>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Área Comercial" value={novoProtocolo.areaComercial} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, areaComercial: e.target.value })} />
                <Input placeholder="Distrito" value={novoProtocolo.distrito} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, distrito: e.target.value })} />
                <Input placeholder="Território" value={novoProtocolo.territorio} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, territorio: e.target.value })} />
                <Input placeholder="RSL" value={novoProtocolo.rsl} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, rsl: e.target.value })} />
                <Input placeholder="DSM" value={novoProtocolo.dsm} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, dsm: e.target.value })} />
                <Input placeholder="RC" value={novoProtocolo.rc} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, rc: e.target.value })} />
                <Input placeholder="Promotor" value={novoProtocolo.promotor} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, promotor: e.target.value })} />
                <Input placeholder="Canal Parceiro" value={novoProtocolo.canal} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, canal: e.target.value })} />
                <Input placeholder="Agricultor" value={novoProtocolo.agricultor} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, agricultor: e.target.value })} />
                <Input placeholder="CPF/CNPJ" value={novoProtocolo.cpfCnpj} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, cpfCnpj: e.target.value })} />
                <Input placeholder="Município" value={novoProtocolo.municipio} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, municipio: e.target.value })} />
                <Input placeholder="Tipo de Protocolo (GAPPER, FUNGICIDAS, etc)" value={novoProtocolo.tipo} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, tipo: e.target.value })} />
              </div>
              <Input placeholder="Observações / Notas" value={novoProtocolo.notas} onChange={(e) => setNovoProtocolo({ ...novoProtocolo, notas: e.target.value })} />
              <Button onClick={adicionarProtocolo}>Adicionar</Button>
              <div className="mt-4">
                <h3 className="font-semibold">Protocolos Registrados:</h3>
                <ul className="list-disc pl-4">
                  {protocolos.map((p, i) => (
                    <li key={i}>{p.tipo} - {p.agricultor} ({p.municipio})</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorios">
          <Card className="mt-4">
            <CardContent className="p-4">
              <p>Exportações, mapas NDVI, histórico e relatórios PDF (futuro).</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
