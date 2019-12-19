<?php
namespace App\Controller;

use App\Services\StatistiqueService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StatistiqueController
 * @package App\Controller
 * @Route("/api/statistiques", name="statistiques_")
 */
class StatistiqueController extends AbstractController
{

    /**
     * @Route("/achats-by-category", name="achats_by_category", methods={"GET"})
     */
    public function statistiqueAchat(StatistiqueService $service)
    {
        return $this->json($service->getGlobalStatistique());
    }
}