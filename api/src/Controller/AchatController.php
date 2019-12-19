<?php
namespace App\Controller;

use App\Controller\Utils\Form\FormValidateur;
use App\Repository\AchatRepository;
use App\Repository\CategoryRepository;
use App\Services\StatistiqueService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class AchatController
 * @package App\Controller
 *
 * @Route("/api/achats", name="achat_")
 * @IsGranted("ROLE_USER")
 */
class AchatController extends AbstractController
{
    /**
     * @Route("", name="index", methods={"GET"})
     *
     * @param AchatRepository $repository
     * @param CategoryRepository $categoryRepository
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function index(AchatRepository $repository, CategoryRepository $categoryRepository)
    {
        return $this->json(
            ['achats' => $repository->findAll(), 'categories' => $categoryRepository ->findAll()],
            200,
            [],
            [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]
        );
    }

    /**
     * @Route("", name="post", methods={"POST"})
     *
     * @param Request $request
     * @param FormValidateur $formValidateur
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function postAchat(Request $request, FormValidateur $formValidateur)
    {
        $result = $formValidateur->post($request);
        return $this->json($result);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     *
     * @param int $id
     * @param FormValidateur $formValidateur
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function deleteAchat(int $id, FormValidateur $formValidateur)
    {
        $formValidateur->delete($id);
        return $this->json(['message' => 'resource deleted']);
    }
}
